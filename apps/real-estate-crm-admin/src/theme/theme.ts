import {defaultTheme} from "react-admin";
import {createTheme, ThemeOptions} from "@material-ui/core/styles";
import {merge} from "lodash";
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
    merge({}, defaultTheme.palette, {
        primary: {
            main: "#1f3a93", // Глубокий синий, премиальный
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#5f27cd", // Роскошный фиолетовый
            contrastText: "#ffffff",
        },
        error: {
            main: "#e74c3c", // Насыщенный красный
            contrastText: "#ffffff",
        },
        warning: {
            main: "#f39c12", // Яркий янтарный
            contrastText: "#ffffff",
        },
        info: {
            main: "#16a085", // Премиальный бирюзовый
            contrastText: "#ffffff",
        },
        success: {
            main: "#27ae60", // Богатый зелёный
            contrastText: "#ffffff",
        },
        background: {
            default: "#f5f5f5", // Светло-серый фон для лёгкости
            paper: "#ffffff",
        },
        text: {
            primary: "#2c3e50", // Глубокий тёмно-синий для текста
            secondary: "#7f8c8d", // Мягкий серый для второстепенного текста
        },
    })
);

const themeOptions: ThemeOptions = {
    palette,
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.4,
        },
        button: {
            textTransform: "none",
        },
    },
    spacing: 8, // Базовый отступ (8px)
    overrides: {
        MuiToolbar: {
          gutters: {
              gap: 16
          }
        },
        MuiButton: {
            root: {
                borderRadius: '100px',
                boxShadow: "0px 4px 8px -2px rgba(0,0,0,0.2)",
                padding: "8px 40px", // Увеличенные отступы для кнопок
                margin: "8px 0", // Отступы между кнопками
            },
            text: {
                borderRadius: '100px',
                padding: "8px 40px", // Увеличенные отступы для кнопок
            },
            textSizeSmall: {
                padding: "8px 40px", // Увеличенные отступы для кнопок
            }
        },
        MuiFilledInput: {
            underline: {
                border: "none",
            },
            root: {
                // borderRadius: '8px',
                padding: "12px 14px",
                // backgroundColor: "#ffffff",
                border: "1px solid #ced4da",
                margin: "8px 0", // Отступы между полями ввода
            },
        },
        MuiInputBase: {
            root: {
                // borderRadius: '8px',
                padding: "12px 14px",
                // backgroundColor: "#ffffff",
                border: "1px solid #ced4da",
                margin: "8px 0", // Отступы между полями ввода
            },
        },
        MuiTableCell: {
            sizeSmall: {
                padding: "16px 32px", // Ещё больше отступов в ячейках таблицы
                borderBottom: "1px solid #dee2e6",
                margin: "8px 0", // Отступы между строками
            },
            head: {
                backgroundColor: "#ecf0f1",
                fontWeight: 700,
            },
            body: {
                fontSize: "1rem",
            },
        },
        MuiTableRow: {
            root: {
                "&:nth-of-type(odd)": {
                    backgroundColor: "#f7f9f9",
                },
                padding: "8px 0", // Отступы между строками
            },
        },
        MuiFormControl: {
            root: {
                width: "100% !important",
            }
        },
        MuiCard: {
            root: {
                borderRadius: 8
            }
        }
    },
};

export const theme = createTheme(merge({}, defaultTheme, themeOptions));
