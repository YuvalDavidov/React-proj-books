const { useState } = React

export function LongTxt({ txt, length }) {
    const [isLongTxtShown, setIsLongTxtShown] = useState(false)

    function getTxtToShow(isLongTxtShown, txt, length) {
        return (txt.length < length || isLongTxtShown) ? txt : txt.substring(0, length + 1) + '...'
    }

    function onToggleLongTxt() {
        setIsLongTxtShown((preLongTxtShown) => !preLongTxtShown)
    }

    return <div className="txt" key="txt">
        <p>{getTxtToShow(isLongTxtShown, txt, length)}</p>
        {txt.length > length && <button onClick={onToggleLongTxt}>{!isLongTxtShown ? 'more' : 'less'}</button>}
    </div>
}