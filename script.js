const addBtn = document.querySelector('.add');
const allBtn = document.querySelectorAll('.add');
const mainContainer = document.querySelector('.mainContainer')
// const mainPara = document.querySelector('#mainPara')
// const mainLine = document.querySelector('.mainLine')
// const mainImage = document.querySelector('.mainImage')
const vertical = document.createElement('div').classList.add('verticalLine')

const addEvent = () => {
    console.log(' addEvent working')
    const div = document.createElement('div')
    div.classList.add('singleBlock')
    div.classList.add('modifyBlock')

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

const addSecEvent = () => {
    console.log('working')
    const div = document.createElement('div')
    div.classList.add('doubleBranch')
    const fLine = document.createElement('div')
    fLine.classList.add('verticalLine')
    const sLine = document.createElement('div')
    sLine.classList.add('verticalLine')
    sLine.classList.add('sLine')
    const tLine = document.createElement('div')
    tLine.classList.add('verticalLine')
    tLine.classList.add('tLine')
    const horizLine = document.createElement('div')
    horizLine.classList.add('horizLine')
    const image1 = document.createElement('img')
    image1.src = "./icons/add_circle_white_24dp.svg"
    image1.classList.add('add')
    image1.classList.add('image1')
    image1.addEventListener('click', () => {
        options()

        // const secDiv = document.createElement('div')
        // const clonePara = mainPara.cloneNode(true)
        // // const cloneLine = mainLine.cloneNode(false)
        // // const cloneImage = mainImage.cloneNode(false)
        // secDiv.append(clonePara)
        // // secDiv.append(cloneLine)
        // // secDiv.append(cloneImage)
        // div.append(secDiv)
    })
    const image2 = document.createElement('img')
    image2.src = "./icons/add_circle_white_24dp.svg"
    image2.classList.add('add')
    image2.classList.add('image2')
    image2.addEventListener('click', options)
    
    div.append(fLine)
    div.append(horizLine)
    div.append(sLine)
    div.append(tLine)
    div.append(image1)
    div.append(image2)

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
    sSpan.addEventListener('click', () => {
        addSecEvent()
        sSpan.parentElement.remove();
    })
    fSpan.innerText = "Single element"
    sSpan.innerText = "Double element"
    div.append(fSpan)
    div.append(sSpan)
    mainContainer.append(div)
    // addBtn.removeEventListener('click', options) // this is only working for first button.
}


addBtn.addEventListener('click', options)


















// const blockClone = block.cloneNode(true)
// const singleBlock = document.createElement('div')




// singleBlock.classList.add("singleBlock")
// para.innerText = "Start"
// singleBlock.append(para)
// mainContainer.appendChild(blockClone)