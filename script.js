const addBtn = document.querySelector('.add');
const allBtn = document.querySelectorAll('.add');
const mainContainer = document.querySelector('.mainContainer')
// const block = document.querySelector('.singleBlock')
const vertical = document.createElement('div').classList.add('verticalLine')

const addEvent = () => {
    console.log('working')
    const div = document.createElement('div')
    div.classList.add('singleBlock')
    const para = document.createElement('p')
    para.innerText = "Start"
    const firstLine = document.createElement('div')
    firstLine.classList.add('verticalLine')
    const secondLine = document.createElement('div')
    secondLine.classList.add('verticalLine')
    const image = document.createElement('img')
    image.src = "./icons/add_circle_white_24dp.svg"
    image.classList.add('add')
    image.addEventListener('click', options)
    
    const delBtn = document.createElement('img')
    delBtn.src = "./icons/delete_white_24dp.svg"
    delBtn.classList.add('delete')
    delBtn.classList.add('hidden')
    delBtn.addEventListener('click', () => {
        delBtn.parentElement.remove()
    } )
    div.addEventListener('mouseover', () => {
        delBtn.classList.remove('hidden')
    })
    div.addEventListener('mouseleave', () => {
        delBtn.classList.add('hidden')
    })

    div.append(delBtn)
    div.append(firstLine)
    div.append(para)
    div.append(secondLine)
    div.append(image)
    mainContainer.append(div)
}

const options = () => {
    const div = document.createElement('div')
    div.classList.add('doubleBlock')
    const fSpan = document.createElement('span')
    fSpan.addEventListener('click', () => {
        addEvent()
        fSpan.parentElement.remove()
    })
    const sSpan = document.createElement('span')
    fSpan.innerText = "Single element"
    sSpan.innerText = "Double element"
    div.append(fSpan)
    div.append(sSpan)
    mainContainer.append(div)
    addBtn.removeEventListener('click', options) // this is only working for first button.
}


addBtn.addEventListener('click', options)


















// const blockClone = block.cloneNode(true)
// const singleBlock = document.createElement('div')




// singleBlock.classList.add("singleBlock")
// para.innerText = "Start"
// singleBlock.append(para)
// mainContainer.appendChild(blockClone)