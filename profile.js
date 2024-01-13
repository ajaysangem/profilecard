const like=document.querySelector(".fa-heart"),
            incrementheartcount=document.querySelector(".count1");

            displayheartLikes();

        function loadheartLikes() {
            const savedheartLikes = localStorage.getItem('postheartLikes');
            return savedheartLikes ? parseInt(savedheartLikes) : 0;
        }

        function saveheartLikes(likes) {
            localStorage.setItem('postheartLikes', likes);
        }

        function displayheartLikes() {
            
            const likeheartCount = loadheartLikes();
            
            // Display likes on the page
            incrementheartcount.textContent = likeheartCount;
        }
        function toggle(){
            if(like.classList.contains("transition")){
                like.classList.remove("transition");
                like.classList.add("transition1");

                const likeheartCount = loadheartLikes();
                const newLikeheartCount = likeheartCount + 1;
                saveheartLikes(newLikeheartCount);

                displayheartLikes();
            }else{
                like.classList.remove("transition1");
                like.classList.add("transition");


                const likeheartCount = loadheartLikes();
                const newLikeheartCount = likeheartCount - 1;
                saveheartLikes(newLikeheartCount);

                displayheartLikes();
            }
        }




        const commentSubmit=document.querySelector(".submit");
        const userComment=document.querySelector(".user_msg");
        const addComment=document.querySelector(".comment_main");
        const count=document.querySelector(".count2");
        document.body.addEventListener("keydown",(ev)=>{
            if(ev.key=="Enter"){
                if(userComment.value == "" || userComment.value == null){
                    console.log("input is required");
                }else{
                    const comments = loadComments();
                    comments.push(userComment.value);
                    saveComments(comments);

                    const likeCount = loadLikes();
                    const newLikeCount = likeCount + 1;
                    saveLikes(newLikeCount);
                    
                    userComment.value="";
                    displayLikes();
                    displayComments();
                }
            }
            
        });
        function saveComments(comments) {
                localStorage.setItem('savedComments', JSON.stringify(comments));
        }   
        function loadComments() {
                const savedComments = localStorage.getItem('savedComments');
                return savedComments ? JSON.parse(savedComments) : [];
        }
        function displayComments() {
            const comments = loadComments();
              
            // Clear existing comments
            addComment.innerHTML = '';
              
            // Display comments on the page
            comments.forEach(comment => {
                    const commentPlus=document.createElement('p');
                    const bbr=document.createElement('br');
                    commentPlus.textContent=comment;
                    commentPlus.classList.add('par');
                    addComment.appendChild(commentPlus);
                    addComment.appendChild(bbr);
            });
        }
        function loadLikes() {
            const savedLikes = localStorage.getItem('postLikes');
            return savedLikes ? parseInt(savedLikes) : 0;
        }
        function saveLikes(likes) {
            localStorage.setItem('postLikes', likes);
        }
        function displayLikes() {
              
            const likeCount = loadLikes();
              
            // Display likes on the page
            count.textContent = likeCount;
        }
        commentSubmit.addEventListener("click",(ev)=>{
                if(userComment.value == "" || userComment.value == null){
                    console.log("input is required");
                }else{
                    const comments = loadComments();
                    comments.push(userComment.value);
                    saveComments(comments);

                    const likeCount = loadLikes();
                    const newLikeCount = likeCount + 1;
                    saveLikes(newLikeCount);

                    userComment.value="";
                    displayLikes();
                    displayComments();
                }
            }
        )
        const div=document.querySelector('.hidding_div');
        div.style.display='none';
        var display=1;
        function comm(){
            if(display==0){
                div.style.display='none';
                console.log(display);
                display=1;
            }else{
                div.style.display='block';
                display=0;
            }
        }
        const dispatch=document.querySelector(".cross");
        dispatch.addEventListener('click',()=>{
            div.style.display='none';
            display=1;
        })

        window.onload = function() {
            displayComments();
            displayLikes();
        };


        const share=document.querySelector('.share_link');
        share.style.display='none';
        var dis=1;
        function shaa(){
            if(dis==0){
                share.style.display='none';
                dis=1;
            }else{
                share.style.display='block';
                dis=0;
            }
        }
        setInterval(()=> {share.style.display='none';
                        dis=1},10000);
        
        const inpLink=document.querySelector(".share-input");
        const coppyButton=document.querySelector(".share-button");

        inpLink.addEventListener("focus",()=> inpLink.select());

        coppyButton.addEventListener("click",()=>{
            const text=inpLink.value;
            navigator.clipboard.writeText(text);

            inpLink.value="copied!";
            setTimeout(()=> inpLink.value=text,500);

        });