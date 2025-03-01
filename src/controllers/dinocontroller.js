import { dinosaurs } from "../data/data.js";
import { navItems } from "../data/data.js";

export const index = (req, res) => {
    res.render("index", {
        navItems,
        dinosaurs,
    });
};

export const details = (req, res) => {
    res.render("details", {
        currentDino: dinosaurs.find(dino => dino.slug === req.params["slug"]),
        navItems,
        dinosaurs,
    });
};

