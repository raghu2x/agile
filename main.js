// import file from "file.json";

let box = document.querySelector(".container .box");

// let card = html/*html*/ `
// 	<div class="card">
// 		<h3 class="title">${assest_title}</h3>
// 		<div class="card_body">
// 			<p>{assest_description}</p>
// 		</div>
// 	</div>
// `;

fetch("/file.json")
	.then((result) => {
		return result.json();
	})
	.then((data) => {
		console.log(data.tasks);
		data.tasks.map((task) => {
			// console.log(val);
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
	})
	.catch((err) => {
		console.log(err);
	});
