interface Choice{
    text:string;
    nextPage: number;
}

interface Page{
    pageNumber:number;
    content: string;
    Choices: Choice[]
}

const book:Page[]=[
    {
        pageNumber:0,
        content:"egy tisztáson találod magad. Látsz egy folyót és egy hegyet. Merre indulsz?",
        Choices:[
            {text: "a hegy irányába", nextPage:1},
            {text: "a folyó irányába", nextPage:2}
        ]
    },
    {
        pageNumber:1,
        content:"A hegy felé indulták, egy kunyhóhoz érkezel.",
        Choices:[
            {text: "bekopogsz", nextPage:3},
            {text: "továbbmész", nextPage:4}
        ]
    },
    {
        pageNumber:2,
        content:"A folyónál belédharap egy kígyó. Kalandod itt véget ért,",
        Choices:[
            {text: "Jáéték újrakezdése", nextPage:0},
        ]
    },
]

let currentpage = 0

const textContainer = document.getElementById('textContainer') as HTMLElement

const render = (NumberOfPAge:number)=>{


    const textContainer = document.getElementById('textContainer') as HTMLElement
    textContainer.innerHTML=''
    const page = book.find(p =>  p.pageNumber ===NumberOfPAge)
    console.log(page)

    let content = document.createElement('p')
    if (page) {
        content.textContent=page.content
        textContainer.appendChild(content)

        page.Choices.forEach(c=>{
            const button =  document.createElement('button') as HTMLButtonElement
            button.textContent = c.text
            button.addEventListener('click', () => {
                render(c.nextPage)
            })
            textContainer.appendChild(button)
        })
        
    }else
    {console.error('page not found')}
    
}



window.addEventListener('DOMContentLoaded',() => {
    render(currentpage)
})








