const { useState } = React

export function LongTxt({ txt, length }) {
    const [isLongTxtShown, setIsLongTxtShown] = useState(false)

    function getTxtToShow(isLongTxtShown, txt, length) {
        return (txt.length < length || isLongTxtShown) ? txt : txt.substring(0, length + 1) + '...'
    }

    function onToggleLongTxt() {
        setIsLongTxtShown((preLongTxtShown) => !preLongTxtShown)
    }


    function txtDisplay() {
        let classes = ''
        let currYear = new Date().getFullYear()

        if (book.pageCount > 500) classes += ' serious'
        else if (book.pageCount > 200) classes += ' descent'
        else if (book.pageCount < 100) classes += ' light'

        if (book.publishedDate < currYear - 10) classes += ' vintage'

        console.log(classes);
        return classes
    }

    return <div className="txt" key="txt">
        <p>{getTxtToShow(isLongTxtShown, txt, length)}</p>
        {txt.length > length && <button onClick={onToggleLongTxt}>{!isLongTxtShown ? 'more' : 'less'}</button>}
    </div>
}