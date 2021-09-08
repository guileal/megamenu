window.onload = () => {
    asyncExecute();
};

async function asyncExecute() {
    try {
        // await createDynamicMegamenu();
    } catch (e) {
        console.error(e);
        //POSSIBLE FUNCTION ERROR HANDLER, SUGESTION: MODIFY LINKS MAIN NAV FOR LINK POSTS PAGES AND REMOVE MEGAMENU FOR NOT BAD UX USER
    } finally {
        controllMegamenuUI();
    }
}
