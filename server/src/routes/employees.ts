import {Router} from "express"
const router: Router = Router()

import passport from "passport"
import {saveEmployee, getEmployees, deleteEmployee, getEmployee, updateEmployee, updatePay} from "../controllers/employeesController"

router.get("/employees", passport.authenticate("jwt", {session: false}), getEmployees)

router.get("/employee/:id", passport.authenticate("jwt", {session: false}), getEmployee)

router.delete("/deleteEmployee/:id", passport.authenticate("jwt", {session: false}), deleteEmployee)

router.post("/saveEmployee",passport.authenticate("jwt", {session: false}), saveEmployee)


router.put("/updateEmployee/:id",passport.authenticate("jwt", {session: false}), updateEmployee)

router.put("/updatePay/:id",passport.authenticate("jwt", {session: false}), updatePay)


export default router