import React from 'react'

const Progress_bar = ({ progress }) => {

    const Parentdiv = {
        height: 20,
        width: '80%',
        backgroundColor: '#18024A',
        borderRadius: 40,
        margin: 50
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#A690DA',
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv} className='parent'>
            <div style={Childdiv} className='child'>
                <span className='progress-text' style={progresstext}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default Progress_bar;