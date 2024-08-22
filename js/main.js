document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector('#new-quote');
    let quote = document.querySelector('.quote');
    let person = document.querySelector('.person');


    const famousQuotes = [
        {
            person: "Albert Einstein",
            quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."
        },
        {
            person: "Mahatma Gandhi",
            quote: "Be the change that you wish to see in the world."
        },
        {
            person: "Martin Luther King Jr.",
            quote: "Injustice anywhere is a threat to justice everywhere."
        },
        {
            person: "Steve Jobs",
            quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
        },
        {
            person: "Nelson Mandela",
            quote: "It always seems impossible until it’s done."
        }
    ];
    
    btn.addEventListener('click',function(){
        let random = Math.floor(Math.random() * famousQuotes.length);
        //generate a random number between 0 and the number of items in our array and round that number to the nearest interger
        // console.log(random);

        quote.innerText = famousQuotes[random].quote;
        person.innerText = famousQuotes[random].person;

    })

});