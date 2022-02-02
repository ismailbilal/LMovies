import React, { useRef, useEffect } from 'react'

const Canvas = ({ average }) => {

    const getR = (AVG) => {
        return AVG <= 5 ? 255
            : 255 - AVG * 25.5;
    }

    const getG = (AVG) => {
        return AVG >= 5 ? 255
            : AVG * 25.5;
    }

    const getColor = (AVG) => {
        let R = getR(AVG);
        let G = getG(AVG);
        return `rgb(${R}, ${G}, 0)`;
    }

    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.beginPath();
        ctx.arc(30, 30, 24, 1.5 * Math.PI, 1.5 * Math.PI + average * 0.2 * Math.PI);
        ctx.strokeStyle = getColor(average);
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.font = "18px Arial";
        ctx.fillText(`${average * 10}%`, 13, 36);
        ctx.fillStyle = '#fff'
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        draw(context)
    }, [draw])

    return <canvas width={'60px'} height={'60px'} ref={canvasRef} />
}

export default Canvas