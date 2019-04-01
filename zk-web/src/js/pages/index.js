define(["mui"], function(mui) {
	mui.init();
	var list = document.querySelector(".list");
	mui.ajax("/api/getlist", {
		success: function(rs) {
			if (rs.code) {
				render(rs.data)
			}
		}
	})
	function render(data) {
		console.log(list.innerHTML)
		list.innerHTML = data.map(function(item){
			return `<li data-id="${item.type}">
				<span>${item.name}</span>
				<b>${item.num}</b>
			</li>`
		}).join("");
	}
// 	mui("nav").on("tap","span",function(){
// 		mui.ajax("/api/getlist", {
// 			data
// 			success: function(rs) {
// 				if (rs.code) {
// 					render(rs.data)
// 				}
// 			}
// 		})
// 	})
})
