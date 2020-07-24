import {Schema, Document, model} from "mongoose"
// import * as _ from "lodash"


const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    secondName: {
        type: String,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    ci: {
        type: Number,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    companyPosition: {
        type: String,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    professionalLevel: {
        type: String,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    dateInsert: {
        type: String,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    user: {
         type: String,
         required: true
    },
    pay: {
        type: Number,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    account: {
        type: Number,
        required: true,
        min: 20
    }
})

const nSemanas: number = 0;

export interface IEmployee extends Document {
    name: string;
    secondName: string;
    ci: number;
    companyPosition: string;
    professionalLevel: String;
    dateInsert: String;
    salary: number;
    user: any;
    pay: number;
    bank: string;
    account: {
        type: number,
        min: 20
    };
    paySalary(salary: number): number
}


employeeSchema.methods.paySalary = function(salary: number): number {
    const user = this;
    const payMax: number = 2_000_000
    const months: number = 12
    const weeks: number = 52

    const IVSS: number = 0.4;
    const RES: number = 0.005;
    const FAOV: number = 0.01;

    
    const salaryYear = payMax * months;
    const salaryWeek = salaryYear / weeks;
    

    
    const result_ivss = salaryWeek * IVSS;

    //result ivss total
    const result_ivss_week = Math.round(result_ivss * week())
        


    const result_res = salaryWeek * RES;
    // result res total
    const result_res_week = Math.ceil(result_res * week()+1)

    // result FAOV total
    const result_faov = salary * FAOV
    const quincena = salary / 2
    

    const res_ivss: number  = 103846
    const total_deducciones = result_faov + res_ivss
    const deduccionesDivider = (total_deducciones / 2) / 2
    
    const payT = quincena - deduccionesDivider;
    
    return payT;
    
}

function week(){
    const date = new Date()
    var year=date.getFullYear();
    var month=date.getMonth();
    var firstD = ((new Date(year, month, 1).getDay()-1)%7+7)%7;
    var days=new Date(year, month+1,0).getDate()-7+firstD;
    const weeks = Math.ceil(days/7)+1;
    return weeks
}

function moneda(num: number): string {
    return parseFloat(num.toString().replace(/,/g, ''))
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default model<IEmployee>("Employee", employeeSchema)