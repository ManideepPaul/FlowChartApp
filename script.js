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
    })
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
    let leftTop = 105;
    let rightTop = 105;
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
    const left = () => {
        
        const div1 = document.createElement('div')
        div1.classList.add('singleBlock')
        div1.classList.add('leftBlock')
        div1.style.top = `${leftTop}px`
        leftTop += 155;

        const para = document.createElement('p')
        para.innerText = "Start"
        const firstLine = document.createElement('div')
        firstLine.classList.add('verticalLine')
        const secondLine = document.createElement('div')
        secondLine.classList.add('verticalLine')
        const image = document.createElement('img')
        image.src = "./icons/add_circle_white_24dp.svg"
        image.classList.add('add')
        image.addEventListener('click', left)

        const delBtn = document.createElement('img')
        delBtn.src = "./icons/delete_white_24dp.svg"
        delBtn.classList.add('delete')
        delBtn.classList.add('hidden')
        delBtn.addEventListener('click', () => {
            leftTop -= 155;
            delBtn.parentElement.remove()
        })
        div1.addEventListener('mouseover', () => {
            delBtn.classList.remove('hidden')
        })
        div1.addEventListener('mouseleave', () => {
            delBtn.classList.add('hidden')
        })

        div1.append(delBtn)
        div1.append(firstLine)
        div1.append(para)
        div1.append(secondLine)
        div1.append(image)
        div.append(div1)
    }
    image1.addEventListener('click', left)
    const image2 = document.createElement('img')
    image2.src = "./icons/add_circle_white_24dp.svg"
    image2.classList.add('add')
    image2.classList.add('image2')
    const right = () => {
        const div1 = document.createElement('div')
        div1.classList.add('singleBlock')
        div1.classList.add('rightBlock')
        div1.style.top = `${rightTop}px`
        rightTop += 155;

        const para = document.createElement('p')
        para.innerText = "Start"
        const firstLine = document.createElement('div')
        firstLine.classList.add('verticalLine')
        const secondLine = document.createElement('div')
        secondLine.classList.add('verticalLine')
        const image = document.createElement('img')
        image.src = "./icons/add_circle_white_24dp.svg"
        image.classList.add('add')
        image.addEventListener('click', right)

        const delBtn = document.createElement('img')
        delBtn.src = "./icons/delete_white_24dp.svg"
        delBtn.classList.add('delete')
        delBtn.classList.add('hidden')
        delBtn.addEventListener('click', () => {
            rightTop -= 155;
            delBtn.parentElement.remove()
        })
        div1.addEventListener('mouseover', () => {
            delBtn.classList.remove('hidden')
        })
        div1.addEventListener('mouseleave', () => {
            delBtn.classList.add('hidden')
        })

        div1.append(delBtn)
        div1.append(firstLine)
        div1.append(para)
        div1.append(secondLine)
        div1.append(image)
        div.append(div1)
    }
    image2.addEventListener('click', right )

    div.append(fLine)
    div.append(horizLine)
    div.append(sLine)
    div.append(tLine)
    div.append(image1)
    div.append(image2)

    mainContainer.append(div)
}


// This will give you option for one element or two element
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
    addBtn.removeEventListener('click', options) // this is only working for first button.
}


addBtn.addEventListener('click', options)


















// const blockClone = block.cloneNode(true)
// const singleBlock = document.createElement('div')




// singleBlock.classList.add("singleBlock")
// para.innerText = "Start"
// singleBlock.append(para)
// mainContainer.appendChild(blockClone)