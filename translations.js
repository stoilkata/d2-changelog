// Translations for Oblivion Diablo 2 Changelog
const translations = {
    en: {
        // Navigation
        nav: {
            title: "OBLIVION CHANGELOG"
        },
        // Changelog Section
        changelog: {
            title: "Latest Updates & Changelog",
            mercenaryUpdates: "🎯 Mercenary Updates",
            generalChanges: "💀 General Changes",
            terrorZones: "⚡ Terror Zones",
            classSkills: "🔮 Class Skill Changes",
            newAreas: "🗺️ New Level 85 Areas",
            gambling: "💸 Gambling Changes",
            difficulty: "⚰️ Difficulty & Penalties",
            monsters: "😈 Monster Buffs",
            uiZones: "🎨 UI & Zone Changes",
            items: "🎁 Item Updates",
            cubeRecipes: "🧙 Cube Recipes",
            runewords: "🧱 New Runewords"
        },
        
        // Mercenary Updates
        mercenaries: {
            act1ColdNormal: "Act 1 - Cold Merc (Normal)",
            act1FireNormal: "Act 1 - Fire Merc (Normal)",
            act1ColdNmHell: "Act 1 - Cold Merc (NM & Hell)",
            act1FireNmHell: "Act 1 - Fire Merc (NM & Hell)",
            act2DefensiveHell: "Act 2 - Defensive Merc (Hell)",
            act2OffensiveHell: "Act 2 - Offensive Merc (Hell)",
            act2CombatHell: "Act 2 - Combat Merc (Hell)",
            act3FireNormal: "Act 3 - Fire Merc (Normal)",
            act3LightningNormal: "Act 3 - Lightning Merc (Normal)",
            act3ColdNormal: "Act 3 - Cold Merc (Normal)",
            act3FireNmHell: "Act 3 - Fire Merc (NM & Hell)",
            act3LightningNmHell: "Act 3 - Lightning Merc (NM & Hell)",
            act3ColdNmHell: "Act 3 - Cold Merc (NM & Hell)",
            act5Offensive: "Act 5 Merc - Offensive",
            act5Combat: "Act 5 Merc - Combat",
            generalImprovements: "General Mercenary Improvements",
            newMercenaries: "New Mercenaries",
            skills: "Skills"
        },
        
        // Classes
        classes: {
            sorceress: "🔥 Sorceress",
            necromancer: "💀 Necromancer",
            paladin: "✝️ Paladin",
            amazon: "🏹 Amazon",
            druid: "🐺 Druid",
            assassin: "🗡️ Assassin",
            barbarian: "⚔️ Barbarian"
        },
        
        // Areas
        areas: {
            act1: "🏰 Act 1",
            act2: "🏜️ Act 2",
            act3: "🌴 Act 3",
            act4: "🔥 Act 4",
            act5: "❄️ Act 5"
        },
        
        // Language Selector
        language: {
            label: "Language",
            english: "English",
            bulgarian: "Български"
        }
    },
    
    bg: {
        // Navigation
        nav: {
            title: "OBLIVION CHANGELOG"
        },
        
        // Changelog Section
        changelog: {
            title: "Последни актуализации и промени",
            mercenaryUpdates: "🎯 Актуализации на наемниците",
            generalChanges: "💀 Общи промени",
            terrorZones: "⚡ Зони на терора",
            classSkills: "🔮 Промени в уменията на класовете",
            newAreas: "🗺️ Нови области от ниво 85",
            gambling: "💸 Промени в хазарта",
            difficulty: "⚰️ Трудност и наказания",
            monsters: "😈 Подобрения на чудовищата",
            uiZones: "🎨 UI и промени в зоните",
            items: "🎁 Актуализации на предметите",
            cubeRecipes: "🧙 Рецепти за куба",
            runewords: "🧱 Нови рунни думи"
        },
        
        // Mercenary Updates
        mercenaries: {
            act1ColdNormal: "Акт 1 - Студен наемник (Нормално)",
            act1FireNormal: "Акт 1 - Огнен наемник (Нормално)",
            act1ColdNmHell: "Акт 1 - Студен наемник (НТ и Ад)",
            act1FireNmHell: "Акт 1 - Огнен наемник (НТ и Ад)",
            act2DefensiveHell: "Акт 2 - Защитен наемник (Ад)",
            act2OffensiveHell: "Акт 2 - Атакуващ наемник (Ад)",
            act2CombatHell: "Акт 2 - Бойни наемник (Ад)",
            act3FireNormal: "Акт 3 - Огнен наемник (Нормално)",
            act3LightningNormal: "Акт 3 - Светкавичен наемник (Нормално)",
            act3ColdNormal: "Акт 3 - Студен наемник (Нормално)",
            act3FireNmHell: "Акт 3 - Огнен наемник (НТ и Ад)",
            act3LightningNmHell: "Акт 3 - Светкавичен наемник (НТ и Ад)",
            act3ColdNmHell: "Акт 3 - Студен наемник (НТ и Ад)",
            act5Offensive: "Акт 5 наемник - Атакуващ",
            act5Combat: "Акт 5 наемник - Боен",
            generalImprovements: "Общи подобрения на наемниците",
            newMercenaries: "Нови наемници",
            skills: "Умения"
        },
        
        // Classes
        classes: {
            sorceress: "🔥 Магьосница",
            necromancer: "💀 Некромант",
            paladin: "✝️ Паладин",
            amazon: "🏹 Амазонка",
            druid: "🐺 Друид",
            assassin: "🗡️ Убиец",
            barbarian: "⚔️ Варвар"
        },
        
        // Areas
        areas: {
            act1: "🏰 Акт 1",
            act2: "🏜️ Акт 2",
            act3: "🌴 Акт 3",
            act4: "🔥 Акт 4",
            act5: "❄️ Акт 5"
        },
        
        // Language Selector
        language: {
            label: "Език",
            english: "English",
            bulgarian: "Български"
        }
    }
};

// Language management functions
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = translations;
    }
    
    // Get translation for a specific key
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = this.translations['en'];
                for (const k of keys) {
                    if (value && value[k]) {
                        value = value[k];
                    } else {
                        return key; // Return key if not found in English either
                    }
                }
                break;
            }
        }
        
        return value || key;
    }
    
    // Switch language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.updatePageTranslations();
            this.updateLanguageSelector();
        }
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // Update all translations on the page
    updatePageTranslations() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage === 'bg' ? 'bg' : 'en';
        
        // Update page title
        document.title = this.currentLanguage === 'bg' ? 'Oblivion - Diablo 2 сървър' : 'Oblivion - Diablo 2 Server';
    }
    
    // Update language selector UI
    updateLanguageSelector() {
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }
    
    // Initialize translations when DOM is loaded
    init() {
        this.updatePageTranslations();
        this.updateLanguageSelector();
        
        // Add event listeners for language buttons
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
}

// Initialize language manager
const langManager = new LanguageManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageManager };
}