const fetchingAllPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const{posts} = await res.json();
    //console.log(posts);
    displayPosts(posts);
}


//All Posts
const fetchingLatestPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const posts  = await res.json();
    //console.log(posts);
    displayLatestPosts(posts);
}

const displayPosts = (posts) =>{
    //console.log(posts);

    const cardContainer = document.getElementById('card-container');
    //console.log(cardContainer);
    posts.forEach((post) =>{
        //console.log(post);
        const card = document.createElement('div');
        card.className = `w-full bg-[#797DFC1A] flex gap-3 border p-10 rounded-2xl`;
        card.innerHTML = `
        
        <!-- Image -->
        <div class ="w-2/12 relative">
            <img class="w-full rounded-xl" src="${post.image}" alt="">
            <img class="absolute bottom-40 left-24" src="./images/red.png" alt="">
            <img id="status-icon${post.id}" class="absolute bottom-40 left-24" src="./images/green.png" alt="">
        </div>
        <!-- Right -->
        <div class="space-y-5 w-full flex-auto">
            <!-- right Top -->
            <div class="flex gap-5">
                <hi># ${post.category}</hi>
                <hi>Author : ${post.author.name}</hi>
            </div>
            <!-- right Middle -->
            <div class="space-y-4">
                <h1 class="text-lg font-bold">${post.title}</h1>
                <p class="font-semibold">${post.description}</p>
            </div>

            <hr>

            <!-- right Bottom -->
            <div class="flex w-full">
                <!-- msg-view-Time -->
                <div class="flex-1 flex justify-between">
                    <div class="flex gap-2 items-center">
                        <img src="./images/massage.png" alt="">
                        <h3>${post.comment_count}</h3>
                    </div>
                    <div class="flex gap-2 items-center">
                        <img src="./images/view.png" alt="">
                        <h3>${post.view_count}</h3>
                    </div>
                    <div class="flex gap-2 items-center">
                        <img src="./images/time.png" alt="">
                        <h3>${post.posted_time}</h3>
                    </div>
                </div>
                <!-- Letter box -->
                <div class="flex-1 flex justify-end">
                    <button><img src="./images/letter.png" alt=""></button>
                </div>
            </div>
        </div>
    
        `
        cardContainer.appendChild(card);
        if(!post.isActive)
        {
            //console.log(document.getElementById('status-icon'));
            document.getElementById(`status-icon${post.id}`).classList.add('hidden');
        }
    })
}



// display Latest post

const displayLatestPosts = (posts) =>{
    console.log(posts);
    const latestContainer = document.getElementById('latest-container');

    posts.forEach((post) =>{
        console.log(post);

        const newCard = document.createElement('div');
        newCard.className =`p-4 space-y-4 border border-[#12132D26] rounded-2xl`;

        newCard.innerHTML =`
        <img src="./images/empty.png" alt="">
        <div class="flex gap-2 items-center">
            <img src="./images/Frame.png" alt="">
            <h1 class="font-medium">29 January 2024</h1>
        </div>
        <h1 class="text-lg font-bold">What will a mars habitat force that impact in our daily life!!!</h1>
        <p class="font-semibold">Yes, you can run unit tests and view the results directly within the app.</p>
        <div class="flex gap-2 items-center">
            <img src="./images/Ellipse.png" alt="">
            <div>
                <h3 class="text-lg font-bold">Cameron Williamson</h3>
                <p class="font-semibold">Unknown</p>
            </div>
        </div>
        `
        latestContainer.appendChild(newCard);
    })
}

fetchingAllPosts();

fetchingLatestPosts();