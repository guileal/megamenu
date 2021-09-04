window.onload = () => {
	asyncExecute();
};

async function asyncExecute() {
	await createDynamicMegamenu();
	controllMegamenuUI();
}
