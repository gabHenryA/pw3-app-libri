import styles from './Select.module.css'

function Select({name, text}) {
    
    return(

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma cartegoria</option>
                <option>Fantasia heroica</option>
                <option>Ficção científica</option>
                <option>Distopia</option>
                <option>Suspense</option>
                <option>Terror</option>
            </select>
        </div>
        
    )

}

export default Select