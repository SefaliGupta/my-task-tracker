const TaskInput = ({ input, setInput, handleSubmit }) => {
  const textareaClasses = `
    focus:border-sky-500 
    focus:outline-sky-500
    min-h-24
    rounded-md
    shadow-md
    outline-2 
    outline-blue-100
    p-4
    m-4
    text-wrap
    max-h-80
    bg-white
    row-span-1
    min-w-150
    font-mono
  `.trim().replace(/\s+/g, ' ');

  const buttonClasses = `
    bg-pink-700 
    hover:bg-pink-900
    hover:cursor-pointer
    rounded-md
    px-4
    py-2
    mx-4
    mb-4
    float-right
    text-white
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className='bg-white'>
      <textarea 
        className={textareaClasses}
        type='text' 
        placeholder='Enter your task...' 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        className={buttonClasses}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default TaskInput;
