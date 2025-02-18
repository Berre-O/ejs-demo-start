import { person } from "../data/data.js";
import { navItems } from "../data/data.js";

export const home = (req, res) => {
    res.render("home", {
        title: "sigma",
        message: "sigma boy",
        navItems,
    });
};

export const about = (req, res) => {
    res.render("default", {
        title: "sigma",
        message: "sigma boy boy boy boy",
        team: [
            "sigmasaurus",
            "velocirapetor",
            "stegosauirus"
        ],
        navItems,
    });
};

export const contact = (req, res) => {
    res.render("contact", {
        title: "contact us",
        message: "contact us at sigma",
        person,
        navItems,
    });
};

export const privacy = (req, res) => {
    res.render("default", {
        title: "Privacy policy",
        message: "sigma privacy",
        navItems,
    });
};
