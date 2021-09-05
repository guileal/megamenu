window.onload = () => {
	asyncExecute();
};

async function asyncExecute() {
	try{
		await requestCategoriesMegamenu();
		createDynamicMegamenu();
	}catch(e){
		console.error(e)
	}finally{
		controllMegamenuUI();
	}
}
