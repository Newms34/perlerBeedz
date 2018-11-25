const colVals = [{ "name": "White", "rgb": [238.5, 238.25, 237.75] }, { "name": "Cream", "rgb": [232, 227, 177] }, { "name": "Yellow", "rgb": [241.25, 202.25, 0.5] }, { "name": "Orange", "rgb": [240, 91, 48] }, { "name": "Red", "rgb": [186.5, 47.5, 59] }, { "name": "Pink", "rgb": [226.5, 104, 152.5] }, { "name": "Purple", "rgb": [96.5, 69.75, 137.25] }, { "name": "Dark Blue (Blue)", "rgb": [44, 70, 144] }, { "name": "Light Blue", "rgb": [41.666666666666664, 107, 192] }, { "name": "Green", "rgb": [54, 123.66666666666667, 75.33333333333333] }, { "name": "Light green", "rgb": [73, 174, 137] }, { "name": "Brown", "rgb": [94.66666666666667, 70, 60.666666666666664] }, { "name": "Transparent Red", "rgb": [192, 36, 53] }, { "name": "Transparent Green", "rgb": [55, 184, 118] }, { "name": "Grey", "rgb": [134.5, 138.5, 141.5] }, { "name": "Black", "rgb": [45.25, 46.5, 49.25] }, { "name": "Clear", "rgb": [216, 210, 206] }, { "name": "Reddish Brown", "rgb": [127, 51, 42] }, { "name": "Light Brown", "rgb": [158.33333333333334, 112.33333333333333, 73.33333333333333] }, { "name": "Dark Red", "rgb": [165, 45, 54] }, { "name": "Translucent Purple", "rgb": [104, 62, 154] }, { "name": "Translucent Brown", "rgb": [135, 89, 61] }, { "name": "Flesh", "rgb": [222, 155, 144] }, { "name": "Beige", "rgb": [222, 180, 139] }, { "name": "Army (Dark Green)", "rgb": [54, 63, 56] }, { "name": "Claret", "rgb": [185, 57, 94] }, { "name": "Burgundy", "rgb": [89, 47, 56] }, { "name": "Turquoise", "rgb": [102, 149, 198.5] }, { "name": "Neon Pink (Fucsia)", "rgb": [255, 32, 141] }, { "name": "Cerise", "rgb": [255, 57, 86] }, { "name": "Neon Yellow", "rgb": [224.5, 231.5, 10.5] }, { "name": "Neon Red", "rgb": [255, 40, 51] }, { "name": "Neon Blue", "rgb": [35, 83, 176] }, { "name": "Neon Green", "rgb": [3.5, 170.5, 63.5] }, { "name": "Neon Orange", "rgb": [254, 126.5, 0] }, { "name": "Fluorescent Yellow", "rgb": [241, 242, 28] }, { "name": "Fluorescent Orange", "rgb": [254, 99, 11] }, { "name": "Fluorescent Blue", "rgb": [38, 89, 178] }, { "name": "Fluorescent Green", "rgb": [12, 189, 81] }, { "name": "Pastel Yellow", "rgb": [244.66666666666666, 236, 83.66666666666667] }, { "name": "Pastel Red", "rgb": [238, 105, 114] }, { "name": "Pastel Purple", "rgb": [136, 109, 185] }, { "name": "Pastel Blue", "rgb": [90.5, 151, 212] }, { "name": "Pastel Green", "rgb": [127, 200, 107.66666666666667] }, { "name": "Pastel Pink", "rgb": [207, 112, 183] }, { "name": "Azure", "rgb": [68.5, 148, 190] }, { "name": "Dark Brown", "rgb": [80, 68, 59] }, { "name": "Brown Medium", "rgb": [90, 62, 54] }, { "name": "Maroon (Wine Red)", "rgb": [129, 53, 71] }, { "name": "Caramel", "rgb": [167, 98, 36] }, { "name": "Tan (Beige)", "rgb": [173, 150, 126] }, { "name": "Sand (Skin)", "rgb": [238, 177, 130] }, { "name": "Ash (Ash Grey", "rgb": [141, 139, 127] }, { "name": "Hunter Green", "rgb": [47, 74, 57] }, { "name": "Light Grey", "rgb": [211, 203, 203] }, { "name": "Ivory", "rgb": [226, 208, 191] }, { "name": "Orange (Clear Orange)", "rgb": [243, 96, 27] }, { "name": "Bright Blue (Blue)", "rgb": [59, 117, 203] }, { "name": "Light Rose (Light Pink)", "rgb": [225, 180, 171] }, { "name": "Red (Light Red)", "rgb": [223, 38, 56] }, { "name": "Lt Yellow", "rgb": [245, 236, 141] }, { "name": "Lime (pearl Green)", "rgb": [72, 175, 79] }, { "name": "Med Blue (pastel blue)", "rgb": [113, 163, 230] }, { "name": "Lavender", "rgb": [173.66666666666666, 143, 207.33333333333334] }, { "name": "Pink (old rose)", "rgb": [238, 106, 151] }, { "name": "Peach (Light orange)", "rgb": [252, 168, 121] }, { "name": "Chocolate", "rgb": [135, 95, 82] }, { "name": "Sky (light blue)", "rgb": [167, 198, 241] }, { "name": "Gold/Orange (Pearl Orange)", "rgb": [238, 149, 39] }, { "name": "Kiwi (Olive)", "rgb": [199, 191, 94] }, { "name": "Bubblegum", "rgb": [229, 138, 163.5] }, { "name": "Dark Blue", "rgb": [41.5, 65.5, 140.5] }, { "name": "Dark Green", "rgb": [35, 105, 80] }, { "name": "Pearl Coral", "rgb": [249, 126, 121] }, { "name": "Pearl Light Blue", "rgb": [122, 174, 162] }, { "name": "Pearl Green", "rgb": [132, 183, 145] }, { "name": "Pearl Yellow", "rgb": [202, 192, 51] }, { "name": "Pearl Light Pink", "rgb": [215, 168, 162] }, { "name": "Silver", "rgb": [111, 115, 122] }, { "name": "Light Green", "rgb": [86, 186, 159] }, { "name": "Rust", "rgb": [140, 55, 44] }, { "name": "Peach", "rgb": [238, 186, 178] }, { "name": "Tan", "rgb": [181.5, 148.5, 107.5] }, { "name": "Magenta", "rgb": [248, 54, 130] }, { "name": "Neon Pink", "rgb": [255, 57, 145] }, { "name": "Pastel Lavender", "rgb": [137.5, 106, 183] }, { "name": "Chedder", "rgb": [241, 170, 12] }, { "name": "Toothpaste", "rgb": [147, 200, 212] }, { "name": "Hot Coral", "rgb": [255, 56, 81] }, { "name": "Plum", "rgb": [162, 75, 156] }, { "name": "Kiwi Lime", "rgb": [108, 190, 19] }, { "name": "Cyan (aka Turquoise)", "rgb": [43, 137, 198] }, { "name": "Blush", "rgb": [255, 130, 133] }, { "name": "Periwinkle Blue", "rgb": [100, 124, 190] }, { "name": "Glow Green", "rgb": [190, 198, 150] }, { "name": "Light Pink", "rgb": [246, 179, 221] }, { "name": "Bright Green", "rgb": [123.5, 200.5, 54] }, { "name": "Light Gray", "rgb": [177, 181, 178] }, { "name": "Evergreen", "rgb": [53, 83, 67] }, { "name": "Gold", "rgb": [187, 118, 52] }, { "name": "Raspberry", "rgb": [165, 48, 97] }, { "name": "Butterscotch", "rgb": [212, 132, 55] }, { "name": "Parrot Green", "rgb": [6, 124, 129] }, { "name": "Dark Grey", "rgb": [77, 81, 86] }, { "name": "Blueberry Cream", "rgb": [130, 151, 217] }, { "name": "Cranapple", "rgb": [128, 50, 69] }, { "name": "Prickly Pear", "rgb": [189, 218, 1] }, { "name": "Sand", "rgb": [217, 168.5, 139] }, { "name": "Burning Sand", "rgb": [254, 144, 143] }, { "name": "Tangerine", "rgb": [254, 164, 2] }, { "name": "Tall Poppy", "rgb": [221, 52, 68] }, { "name": "Raspberry pink", "rgb": [235, 102, 190] }, { "name": "Gray 2", "rgb": [142, 143, 147] }, { "name": "Emerald", "rgb": [82, 204, 106] }, { "name": "Baby Blue", "rgb": [97, 168, 223] }, { "name": "Sandstorm", "rgb": [239, 221, 6] }, { "name": "Redwood", "rgb": [124, 69, 69] }, { "name": "light brown", "rgb": [89, 71, 67] }, { "name": "Royal Purple", "rgb": [125, 102, 173] }, { "name": "True Blue", "rgb": [57, 109, 188] }, { "name": "Hot Pink", "rgb": [254, 91, 186] }, { "name": "Lily Pink", "rgb": [223, 159, 205] }, { "name": "Shadow Green", "rgb": [161, 198, 206] }, { "name": "Sea Mist", "rgb": [171, 218, 202] }, { "name": "Beeswax", "rgb": [248, 197, 131] }, { "name": "Maverick", "rgb": [192, 174, 219] }, { "name": "Mona Lisa", "rgb": [249, 188, 193] }, { "name": "Old Pink", "rgb": [200, 103, 130] }, { "name": "Blue Green", "rgb": [132, 199, 198] }, { "name": "burgundy", "rgb": [161, 48, 83] }, { "name": "Yellow Orange", "rgb": [255, 131, 75] }, { "name": "Carnation Pink", "rgb": [253, 145, 214] }, { "name": "Copper", "rgb": [157, 91, 46] }, { "name": "Gray 3", "rgb": [102, 103, 106] }, { "name": "Sky Blue", "rgb": [164, 200, 232] }, { "name": "Medium Turquoise", "rgb": [63, 152, 158] }, { "name": "Marigold", "rgb": [156, 116, 60] }, { "name": "Corn", "rgb": [246, 191, 5] }, { "name": "Mulberry Wood", "rgb": [120, 49, 90] }, { "name": "Mandys Pink", "rgb": [253, 164, 126] }, { "name": "Spring Sun", "rgb": [243, 217, 182] }, { "name": "Picasso", "rgb": [239, 229, 109] }, { "name": "Pistachio", "rgb": [160, 213, 137] }, { "name": "Outrageous Orange", "rgb": [254, 127, 80] }, { "name": "Buccaneer", "rgb": [152, 78, 67] }, { "name": "Paprika", "rgb": [172, 44, 68] }, { "name": "Key Lemon Pie", "rgb": [187, 197, 40] }, { "name": "Green Tea", "rgb": [56, 112, 97] }, { "name": "Metallic Gold", "rgb": [105, 96, 70] }, { "name": "Black Rock", "rgb": [54, 61, 92] }, { "name": "Canary", "rgb": [247, 248, 57] }, { "name": "Blaze Orange", "rgb": [253, 81, 67] }, { "name": "Vanilla", "rgb": [226, 193, 178] }, { "name": "Mine Shaft", "rgb": [67, 72, 78] }, { "name": "Dark Algae", "rgb": [146, 183, 1] }, { "name": "Jade Green", "rgb": [49, 131, 50] }, { "name": "Light Sea Blue", "rgb": [119, 191, 209] }, { "name": "Steel blue", "rgb": [91, 159, 199] }, { "name": "Dark Steel Blue", "rgb": [56, 121, 166] }, { "name": "Sea Blue", "rgb": [59, 135, 171] }, { "name": "Ghost White", "rgb": [211, 211, 208] }, { "name": "Ash Gray", "rgb": [189, 189, 187] }, { "name": "Gray 1", "rgb": [163, 167, 169] }, { "name": "Dark Olive", "rgb": [124, 137, 52] }, { "name": "Deer", "rgb": [184, 138, 98] }, { "name": "Clay", "rgb": [145, 106, 77] }, { "name": "Sienna", "rgb": [174, 103, 53] }, { "name": "Deep Chestnut", "rgb": [165, 87, 97] }, { "name": "Red Wine", "rgb": [140, 65, 74] }, { "name": "Goldenrod", "rgb": [233, 181, 4] }, { "name": "Coral Red", "rgb": [250, 97, 106] }, { "name": "Dark Pink", "rgb": [217, 59, 128] }, { "name": "Gray 4", "rgb": [88, 92, 99] }, { "name": "Pastel Orange", "rgb": [251, 183, 73] }, { "name": "Brunswick Green", "rgb": [52, 64, 66] }]