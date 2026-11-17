/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */
export function createPaanOrder(basePaan, customizations) {
    if (
        basePaan === null ||
        typeof basePaan !== "object" ||
        Object.getPrototypeOf(basePaan) !== Object.prototype
    )
        return {};

    if (
        customizations === null ||
        typeof customizations !== "object" ||
        Object.getPrototypeOf(customizations) !== Object.prototype
    ) {
        let clonedPaan = structuredClone(basePaan);
        return clonedPaan;
    }

    let customizedPaan = Object.assign({}, basePaan, customizations);
    return customizedPaan;
}

export function freezeMenu(menu) {
    if (
        menu === null ||
        typeof menu !== "object" ||
        Object.getPrototypeOf(menu) !== Object.prototype
    )
        return {};

    Object.freeze(menu);
    return menu;
}

export function updatePrices(menu, increase) {
    if (
        menu === null ||
        typeof menu !== "object" ||
        Object.getPrototypeOf(menu) !== Object.prototype
    )
        return {};

    if (typeof increase !== "number" || !Number.isFinite(increase)) return {};

    let entries = Object.entries(menu);
    let updatedArr = entries.map(([key, value]) => [key, value + increase]);
    let updatedObj = Object.fromEntries(updatedArr);

    return updatedObj;
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
    if (
        regularMenu === null ||
        typeof regularMenu !== "object" ||
        Object.getPrototypeOf(regularMenu) !== Object.prototype
    )
        regularMenu = {};
    if (
        specialsMenu === null ||
        typeof specialsMenu !== "object" ||
        Object.getPrototypeOf(specialsMenu) !== Object.prototype
    )
        specialsMenu = {};

    return { ...regularMenu, ...specialsMenu };
}
