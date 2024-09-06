import styles from './Select.module.css'

function Select({name, text}) {
    
    return(

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <options>Selecione uma cartegoria</options>
                <options>Ficção científica</options>
                <options>Fantasia heroica</options>
                <options>Suspense</options>
                <options>Terror</options>
            </select>
        </div>
        
    )

}

export default Select