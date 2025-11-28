let play_list =  document.querySelector('.paly_list')

async function dispalyVideo(){
    let res = await fetch("data.json")
    // console.log(res);
    let data = await res.json()
    console.log(data);
    for(let obj of data){
        // console.log(obj);
        let play_box = document.createElement('div')
        play_box.setAttribute('class','play_box')

        let pic = document.createElement('img')
        pic.src = obj.image

        let h2 = document.createElement('h2')
        h2.innerText = obj.title

        play_box.append(pic,h2)
        play_list.appendChild(play_box)

        let video = document.querySelector('video')
        // console.log(video);

        play_box.addEventListener('click',()=>{
            video.src =obj.video
        })
    }
}

dispalyVideo() ;