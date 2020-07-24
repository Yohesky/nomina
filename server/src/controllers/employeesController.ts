import {Request, Response, json} from "express"
import Employee, {IEmployee} from "../models/employee"


export const getEmployees = async (req: Request,res: Response) => {
   const id = req.user
   const employees = await Employee.find({user: id})
   return res.json(employees)
   
}

export const getEmployee = async (req: Request,res: Response) => {
        const {id} = req.params
        const employee = await Employee.findById(id)
        return res.json(employee)
}

export const deleteEmployee = async (req: Request,res: Response) => {
    const {id} = req.params
    await Employee.findByIdAndDelete(id)   
    res.json({message: "employee deleted"})
}

export const saveEmployee = async (req: Request,res: Response) => {
    const {name, secondName, ci, companyPosition, professionalLevel, dateInsert, salary, bank, account} = req.body
    const Newemployee: IEmployee = new Employee({
        name,
        secondName,
        ci,
        companyPosition,
        professionalLevel,
        dateInsert,
        salary,
        bank, 
        account
    })

    Newemployee.pay = await Newemployee.paySalary(salary)
    Newemployee.user = req.user
    const savedEmployee = await Newemployee.save()
    return res.json(savedEmployee)
}

export const updateEmployee = async (req: Request,res: Response) => {
    const {id} = req.params
    const {name, secondName, ci, companyPosition, professionalLevel, dateInsert, salary, bank, account} = req.body
    const employee: IEmployee = new Employee({
        name,
        secondName,
        ci,
        companyPosition,
        professionalLevel,
        dateInsert,
        salary,
        bank,
        account
    })

   employee.pay = await employee.paySalary(salary)
   const employeeUpdated = await Employee.findByIdAndUpdate(id, {
    name,
    secondName,
    ci,
    companyPosition,
    professionalLevel,
    dateInsert,
    salary,
    pay: employee.paySalary(salary),
    bank,
    account,
   })

   return res.json({
        message: 'Successfully updated',
        employeeUpdated
    });

    
}

export const updatePay = async (req: Request, res: Response) => {

    const {id} = req.params
    const {salary} = req.body
     const employee: IEmployee = new Employee({
         salary
     })

     employee.pay = await employee.paySalary(salary)
     const payUpdated = await Employee.findByIdAndUpdate(id, {
         pay: employee.paySalary(salary)
     }) 

     return res.json(payUpdated)
}



