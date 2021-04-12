let teamMate = item => 
`<div class="col-md-4 col-xs-12">
    <div class="single-team-member">
        <div class="image">
            <img class="team-photo" src=${item.photo} alt="a portrait from our employee, ${item.name}" />
            <div class="opacity tran3s">
                <ul class="tran3s">
                    <li>
                        <a href=${item.linkedin} target="_blank" class="tran3s"
                        ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </div>
        <h6>${item.name}</h6>
        <p>${item.job_title}</p>
    </div>
</div>`

const myData = async() => {
    const response = await fetch ('https://sheetdb.io/api/v1/q9yv0j1u4w83b');
    const JSON = await response.json();
    document.querySelector("#team-members")
	.innerHTML = JSON.map(item => teamMate(item)).join('');
}

  window.addEventListener("load", function(event) {
   myData()
  })

const myInstagramPhotos = async() => {
    const response = await fetch('https://www.instagram.com/makersofmaykers/?__a=1');
    const JSON = await response.json();
    console.log(JSON)
}