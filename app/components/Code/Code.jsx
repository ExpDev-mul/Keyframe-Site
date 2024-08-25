"use client";
import { useEffect, useState } from 'react'

const colors = {
    'declaration': 'rgb(235, 25, 50)',
    'command': 'rgb(120, 120, 250)',
    'string': 'rgb(0, 180, 0)',
    'constant': 'rgb(225, 50, 0)'
}
const highlights = {
    'dec': 'declaration',
    'function': 'declaration',
    'for': 'declaration',
    'if': 'declaration',
    'return': 'declaration',

    'true': 'constant',
    'false': 'constant',

    'print': 'command',
}

const modifyCode = (code) => {
    // Look for any strings
    let newCode = ''
    let nonStringCaptured = ''
    let stringCaptured = null
    for (let i = 0; i < code.length; i++){
        const char = code[i]
        
        if (char == '"'){
            if (!stringCaptured){
                newCode += nonStringCaptured
                nonStringCaptured = ''
                stringCaptured = '"'
            } else {
                // Finished capturing a string
                stringCaptured += '"'
                newCode += `<span style='color: ${colors.string};'>${stringCaptured}</span>`
                stringCaptured = null
            }
        } else {
            if (stringCaptured){
                stringCaptured += char
            } else {
                nonStringCaptured += char
            }
        }
    }

    newCode += nonStringCaptured
    code = newCode

    for (let key in highlights){
        code = code.replaceAll(key, `<span style='color: ${colors[highlights[key]]};'>${key}</span>`)
    }

    return code
}

export default function Code({ content }){
    const [code, setCode] = useState( modifyCode(content) )
    useEffect(() => {
        console.log(code)
    }, [code])
    return (
        <div className='w-96 h-auto border-[1px] border-[rgba(var(--border-rgba))] rounded-md max-w-[80vw] p-5 font-mono code bg-[rgb(var(--background-rgb))]'>
            <pre dangerouslySetInnerHTML={{ __html: code }} className='overflow-x-auto pb-2'>
                
            </pre>
        </div>
    );
};
