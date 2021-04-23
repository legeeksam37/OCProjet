import { useState } from 'react'





function QuestionForm() {
    const [inputValue, setInputValue] = useState('')
    
    function handleInput(e) {
		setInputValue(e.target.value)
	}

    function verifyEmail(){
        if (!inputValue.includes('@gmail.com')){
			alert("Attention, votre domaine n'est pas valide")
		}
    }
    
    
    return (
        <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            
                <input
                    placeholder='Entrez votre mail'
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={verifyEmail}
                />
                <button type='submit'>Valider</button>
          
		</footer>
    )
}

export default QuestionForm
