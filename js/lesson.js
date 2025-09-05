const loadLessons=()=>{
    fetch ("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(json=>displayLesson(json.data))
}

const loadLevelWord = (id) =>{
        const url=`https://openapi.programming-hero.com/api/level/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>
             displayLevelWords(data.data));
        }


const displayLevelWords = (words) =>{
        const wordContainer=document.getElementById("word-container")
        wordContainer.innerHTML="";




        words.forEach(word => {
           const card=document.createElement("div");
           card.innerHTML=`
           <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-5">
            <h2 class="inter font-bold text-[32px]">${word.word}</h2>
            <p class="inter text-[20px]">Meaning/pronounciation</p>

            <div class="font-bangla text-[32px] text-[#18181B] ">"${word.meaning}/ ${word.pronunciation}"</div>

            <div class="flex justify-between">
              <button class="bg-[rgba(26,145,255,0.1)] hover:bg-[rgba(26,145,255,0.4)] p-3 rounded-xl"><i class="fa-solid fa-circle-info"></i></button>
              <button class="bg-[rgba(26,145,255,0.1)]  hover:bg-[rgba(26,145,255,0.4)]  p-3 rounded-xl"><i class="fa-solid fa-volume-high"></i></button>
            </div>
          </div>
           `

           wordContainer.append(card)

        });
}


const displayLesson=(lessons)=>{
        // 1.get the container
        const levelContainer=document.getElementById("level-container")
        levelContainer.innerHTML="";
        // 2.get into every lessons
        for(let lesson of lessons){
        // 3.create element
    const btnDiv=document.createElement("div");
    btnDiv.innerHTML=`
    <button onclick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
    </button>
    `
        // 4.append child
        levelContainer.append(btnDiv);
        }
}
loadLessons();