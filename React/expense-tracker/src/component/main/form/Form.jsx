import React, { useState, useContext,useEffect } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../context/context'
import useStyles from './styles'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories } from '../../../categories/categories'
import formatDate from '../../../utils/formatDate'
import { useSpeechContext } from '@speechly/react-client'
import  CostomizedSnackbar from '../../snackbar/SnackBar'


const initialState = {
    id:'',
    amount:'',
    category:'',
    type:'',
    date: formatDate( new Date() )
}

const Form = () => {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false)
    const [ formData, setFormData ] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();
    
    const createTransaction = () => {

        if(formData.amount==='' || formData.category==='' || formData.type==='' || formData.date===''){
            return;
        }

        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

        
            const transactions = { ...formData, amount: Number(formData.amount), id: uuidv4() }
            setOpen(true);
            addTransaction(transactions);
            setFormData(initialState);
        
    }

    useEffect(()=>{
        if(segment){
            if(segment.intent.intent === 'add_expense'){
                setFormData({...formData, type:'Expense'})
            }else if(segment.intent.intent === 'add_income'){
                setFormData({...formData, type:'Income'})
            }else if(segment.isFinal && segment.intent.intent === 'create_transaction'){
                return createTransaction();
            }else if(segment.isFinal && segment.intent.intent === 'cancel_transaction'){
                return setFormData(initialState);
            }

            segment.entities.forEach((e)=>{
                const category =  `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
    
                switch(e.type){
                    case 'amount': 
                        setFormData({...formData, amount:e.value});
                        break;

                    case 'category':
                        if(incomeCategories.map((ic)=> ic.type).includes(category)){
                        setFormData({...formData, type:'Income', category});
                        }else if(expenseCategories.map((ic)=> ic.type).includes(category)){
                            setFormData({...formData, type:'Expense', category});
                        }
                        break;

                    case 'date':
                        setFormData({...formData, date:e.value});
                        break;

                    default:
                        break;
                }
            });

            if(segment.isFinal && formData.type && formData.category && formData.amount && formData.date){
                createTransaction();
            }

        }


    },[segment])

    const selectedCategories = formData.type ==='Income' ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <CostomizedSnackbar open={open} setOpen={setOpen} />
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle1' gutterBottom style={{marginTop:'12px'}}>
                  {segment &&  segment.words.map((w)=>w.value).join(" ") }
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>

                    </Select>

                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        
                        {
                            selectedCategories.map((c)=>(
                                <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                            ))
                        }
                    </Select>

                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>

            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
            </Grid>

            <Button variant='outlined' className={classes.button} color='primary' fullWidth onClick={createTransaction} >Create</Button>

        </Grid>
    )
}

export default Form