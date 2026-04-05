const picArray = [
    {
        title: "Sunset Over Mountains",
        medium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BN-EcC5k0-06M39mVI50t2GqRW-wnfGGIA&s",
        caption: "A beautiful sunset behind the mountains",
        description: "The sky turns orange and pink as the sun sets over the peaks."
    },
    {
        title: "Forest Trail",
        medium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BN-EcC5k0-06M39mVI50t2GqRW-wnfGGIA&s",
        caption: "A peaceful forest path",
        description: "Walk along the winding trail surrounded by tall green trees."
    },
    {
        title: "City Skyline",
        medium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BN-EcC5k0-06M39mVI50t2GqRW-wnfGGIA&s",
        caption: "Downtown city skyline",
        description: "Skyscrapers rise above the streets, reflecting the evening light."
    },
    {
        title: "Sunset Over Mountains",
        medium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BN-EcC5k0-06M39mVI50t2GqRW-wnfGGIA&s",
        caption: "A beautiful sunset behind the mountains",
        description: "The sky turns orange and pink as the sun sets over the peaks."
    },
    {
        title: "Forest Trail",
        medium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BN-EcC5k0-06M39mVI50t2GqRW-wnfGGIA&s",
        caption: "A peaceful forest path",
        description: "Walk along the winding trail surrounded by tall green trees."
    },
    {
        title: "City Skyline",
        medium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BN-EcC5k0-06M39mVI50t2GqRW-wnfGGIA&s",
        caption: "Downtown city skyline",
        description: "Skyscrapers rise above the streets, reflecting the evening light."
    }
];

const section = document.querySelector(".section");

let html = ""

picArray.forEach((card) => {

    html += `<article class="card">
                    <h2>${card.title}</h2>
                    <figure>
                        <img src="${card.medium}" alt="${card.title}">
                        <figcaption>${card.caption}</figcaption>
                    </figure>
                    <p>${card.description}</p>
                </article>`

})

section.innerHTML = html