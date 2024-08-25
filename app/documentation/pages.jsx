import Code from '../components/Code/Code.jsx'

export default {
    "Getting Started": true,
    "Installation_and_setup": 
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Installation and Setup</h1>
        <h2 className='text-1xl font-light opacity-80'>All installation and setup instructions may be found in the corresponding GitHub repository to Keyframe.</h2>
    </>,
    "Syntax": true,
    "variables_and_printing": 
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Variables and Printing</h1>
        <h2 className='text-1xl font-light opacity-80'>Variables allow us to store reusable values and give them a name. Let's showcase how we can create a variable in Keyframe and assign it a value, then use that variable to display something in the output:</h2>

        <Code content={`dec output = "Hello World!"\nprint(output)`}/>
        <h3 className='text-sm font-light opacity-60'>| The output would be 'Hello World!'</h3>
    </>,

    "for_loops": 
    <>
        <h1 className='text-2xl font-extrabold mt-6'>For Loops</h1>
        <h2 className='text-1xl font-light opacity-80'>Imagine we would want to print out the text from the last example, but 5 times in a row. We would then have to use the print command 5 times in a row:</h2>

        <Code content={`dec output = "Hello World!"\nprint(output)\nprint(output)\nprint(output)\nprint(output)\nprint(output)`}/>
        <h3 className='text-sm font-light opacity-60'>| The output would be 'Hello World!', 5 times</h3>
        <h2 className='text-1xl font-light opacity-80'>That looks very messy and what if we want to do that 100 times? It'll be very challenging. For that, we have for loops. They allow us to rexecute specific lines of code as many times as want:</h2>
        <Code content={`dec output = "Hello World!"\nfor x = (1,5){\n	print(output)\n}`}/>
        <h3 className='text-sm font-light opacity-60'>| The output would be 'Hello World!', 5 times</h3>
        <h2 className='text-1xl font-light opacity-80'>Now you may be confused on why did I even write 'x'? What is that? That is called the loop variable. As we progress through the loop, from 1 to 5, with a step of 1, we can track our current specific iteration through the loop variable. So if we would do:</h2>
        <Code content={`for x = (2,5){\n	print(x)\n}`}/>
        <h3 className='text-sm font-light opacity-60'>The output would be: '2', '3', '4' and then '5'</h3>
    </>,

    "functions": 
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Functions</h1>
        <h2 className='text-1xl font-light opacity-80'>Say we have a specific block of code we would like to reuse many times. Functions provide us with the answer to this issue!</h2>

        <Code content={`dec x = 5\nfunction test(){\n   print(x)\n}\n\ntest()\nx = 10\ntest()`}/>
        <h3 className='text-sm font-light opacity-60'>The output would be '5' and '10'</h3>
    </>,

    "arrays": 
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Arrays</h1>
        <h2 className='text-1xl font-light opacity-80'>We have learnt about variables, and how they easily allow us to store a value and assign it a name. But, what if we want to store multiple variables at once? Then we'll have to declare many variables, and it becomes messy. That's what arrays are for!</h2>

        <Code content={`dec a = [10,90,50,3,10]`}/>
        <h2 className='text-1xl font-light opacity-80'>Here we succesfully declared a variable called 'a', which would store many values under a single variable! But, how do we access those individual items? Well, we need to know they are ordered by an index. The first element is the 0th index, the second is the 1st and so on. So, to grab the number '3' out of the array:</h2>
        <Code content={`dec a = [10,90,50,3,10]\nprint(a[3])`}/>
        <h3 className='text-sm font-light opacity-60'>The output would be '3'</h3>
    </>,

    "strings": 
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Strings</h1>
        <h2 className='text-1xl font-light opacity-80'>Strings are a chain of characters that together form some readable text. For example, "Hello" is a valid string and so is "Serve the table, um... number 25!". Yes, strings may indeed contain special characters as viewed in previous examples. Let's declare a string inside a variable. </h2>

        <Code content={`dec meaningfulText = "Hello there, user! We have succesfully connected to PORT 3000."`}/>
        <h2 className='text-1xl font-light opacity-80'>So there we have a meaningul text, notice we are using camel-case naming. Now, what if we want to connect together a pair of strings, or even more? Well, Keyframe lets you do it very easily!</h2>
        <Code content={`dec name = "Or Pinto"\ndec welcomeMessage = "Hello there, "\nprint( welcomeMessage + name + "!" )`}/>
        <h3 className='text-sm font-light opacity-60'>The output would be 'Hello there, Or Pinto!'</h3>
        <h2 className='text-1xl font-light opacity-80'>Here we connected together 3 different strings, in different fashions. From connectiong string variables to immediately-constructed strings. The connection process is formally called 'String concatenation'.</h2>
    </>,
    "Extra Information": true,
    "interpreter":
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Interpreter</h1>
        <h2 className='text-1xl font-light opacity-80'>Keyframe is directly interpreted from C++, using the formal approach of an interpreter construction. It is well-optimized but is intended for small-scale sketches. Keyframe interpreter may be quantumly slowed down due to imperfect optimization at this moment, but Keyframe is still under development and this will get taken care of.</h2>
    </>,
    "performance":
    <>
        <h1 className='text-2xl font-extrabold mt-6'>Performance</h1>
        <h2 className='text-1xl font-light opacity-80'>Keyframe is being conducted tests upon to check for its performance stats. Keyframe is powerful enough to withstand average programs that are used in illustrations. Because this is a solo project and I am quite busy with studying, I am not always working on this side project and thereof there is still a long journey ahead. At the end of the day, I am just another guy with a dream.</h2>
    </>
}