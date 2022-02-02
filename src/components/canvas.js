import React, { useRef, useEffect } from 'react'

const Canvas = ({ average }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
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

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

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

        draw(context)
    }, [average])

    return <canvas width={'60px'} height={'60px'} ref={canvasRef} />
}

export default Canvas