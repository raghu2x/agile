let box = document.querySelector(".container .box");
data.tasks.map((task) => {
	task.assets.map((val) => {
		console.log(val);
		let video = `<iframe src="${val.display_asset_video}"></iframe>`,
			image = ` <img src="${val.display_asset_image}" alt="">`;
		let card = `
            <div class="card">
                <h3 class="title">${val.asset_title}</h3>
                <div class="card_body">
                    <p>${val.asset_description}</p>
                    ${val.display_asset_video ? video : ""}
                    ${val.display_asset_image ? image : ""}
            
                </div>
            </div>
        `;
		box.insertAdjacentHTML("beforeend", card);
	});
});
