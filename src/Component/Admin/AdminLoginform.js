import AdminModal from "../UI/AdminModal"
import classes from "./AdminLoginform.module.css"
import React,{useRef,useState} from "react"
import AddMeals from "./AddMeals"
//import ViewOrders from "./ViewOrders"
import RemoveMeals from "./RemoveMeals"

const AdminLoginForm = props =>{
    const usernameInputRef=useRef();
    const passwordInputRef=useRef();
    const[isLoginCorrect,setIsLoginCorrect]=useState(false);
    const[isAddMealsClick,setIsAddMealsClick]=useState(false);
    const[isRemoveMealsClick,setIsRemoveMealsClick]=useState(false);
  //  const[isViewOrderClick,setIsViewOrderClick]=useState(false);
    console.log("AdminForm component");
    const submitFormHandler=(event)=>{
        event.preventDefault();
        if(usernameInputRef.current.value === "root" && passwordInputRef.current.value === "toor"){
            setIsLoginCorrect(true);
        }
    }
    const AdminForm_1= <form onSubmit={submitFormHandler}>
                            <label htmlFor='username'><p><b>UserName:</b></p></label>
                            <br/>
                            
                            <input id="username" ref={usernameInputRef}/>
                            <br/>
                          
                            <lable htmlFor='password'><p><b>Password:</b></p></lable>
                            <br/>
                         
                            <input id='password' ref={passwordInputRef}/>
                            <br/>
                          
                            <div className={classes.actions}>
                                <button className={classes.button}>Login</button>
                                <button className={classes.button} type="button" onClick={props.onCloseAdmin}>close</button>
                            </div>
   
                        </form>;

    const addMealsHandler=()=>{
        setIsAddMealsClick(true);
    }  
    const removeMealsHandler=()=>{
        setIsRemoveMealsClick(true);
    }  
  /* const viewOrderHandler=()=>{
        setIsViewOrderClick(true);
    }*/
   
    return <AdminModal onClose={props.onCloseAdmin}>
        <div className={classes.form}>
        {!isLoginCorrect && AdminForm_1}
        {isLoginCorrect && !isRemoveMealsClick /*&& !isViewOrderClick*/ && !isAddMealsClick &&<button onClick={addMealsHandler} className={classes.buttonAdmin}>Add meals</button>}
        {isLoginCorrect && !isRemoveMealsClick /*&& !isViewOrderClick */&& !isAddMealsClick && <button className={classes.buttonAdmin} onClick={removeMealsHandler} >Remove Meals</button>}
        {/*isLoginCorrect && !isRemoveMealsClick && !isViewOrderClick &&!isAddMealsClick && <button className={classes.buttonAdmin}  onClick={viewOrderHandler}>View Orders</button>*/}
        {isLoginCorrect && <form><button type="submit" className={classes.buttonLogout}>Logout</button></form>}
        {isAddMealsClick && <AddMeals/>}
        {isRemoveMealsClick && <RemoveMeals/>}
        {/*isViewOrderClick && <ViewOrders/>*/}
        </div>
  </AdminModal>
}
export default AdminLoginForm