


function careScale({scaleValue, careType}) {
    

    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    const quantityLabel = {
        1: 'peu',
        2: 'peu',
        3: 'peu',
        4: 'moyennement',
        5: 'moyennement',
        6: 'moyennement',
        7: 'beaucoup',
        8: 'beaucoup',
        9: 'beaucoup',
        10: 'extrêmement'
    }

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}

            <div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		    >
			
		</div>

        </div>
     
    )
}

export default careScale