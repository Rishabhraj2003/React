import styles from "./App.module.css";


function ModuleStyling(){

return(

<div>

<h1 className={styles.title}>
CSS Module Example
</h1>


<div className={styles.card}>
My Card
</div>


</div>

)

}

export default ModuleStyling;