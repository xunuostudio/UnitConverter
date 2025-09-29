// 單位換算數據
const unitData = {
    length: {
        name: '長度',
        units: {
            'mm': { name: '毫米', factor: 0.001, system: 'metric' },
            'cm': { name: '厘米', factor: 0.01, system: 'metric' },
            'm': { name: '米', factor: 1, system: 'metric' },
            'km': { name: '公里', factor: 1000, system: 'metric' },
            'in': { name: '英寸', factor: 0.0254, system: 'imperial' },
            'ft': { name: '英尺', factor: 0.3048, system: 'imperial' },
            'yd': { name: '碼', factor: 0.9144, system: 'imperial' },
            'mi': { name: '英里', factor: 1609.344, system: 'imperial' }
        }
    },
    weight: {
        name: '重量',
        units: {
            'mg': { name: '毫克', factor: 0.000001, system: 'metric' },
            'g': { name: '克', factor: 0.001, system: 'metric' },
            'kg': { name: '公斤', factor: 1, system: 'metric' },
            't': { name: '公噸', factor: 1000, system: 'metric' },
            'oz': { name: '盎司', factor: 0.0283495, system: 'imperial' },
            'lb': { name: '磅', factor: 0.453592, system: 'imperial' },
            'st': { name: '英石', factor: 6.35029, system: 'imperial' }
        }
    },
    area: {
        name: '面積',
        units: {
            'mm²': { name: '平方毫米', factor: 0.000001, system: 'metric' },
            'cm²': { name: '平方厘米', factor: 0.0001, system: 'metric' },
            'm²': { name: '平方米', factor: 1, system: 'metric' },
            'km²': { name: '平方公里', factor: 1000000, system: 'metric' },
            'in²': { name: '平方英寸', factor: 0.00064516, system: 'imperial' },
            'ft²': { name: '平方英尺', factor: 0.092903, system: 'imperial' },
            'yd²': { name: '平方碼', factor: 0.836127, system: 'imperial' },
            'acre': { name: '英畝', factor: 4046.86, system: 'imperial' }
        }
    },
    volume: {
        name: '體積',
        units: {
            'ml': { name: '毫升', factor: 0.000001, system: 'metric' },
            'l': { name: '升', factor: 0.001, system: 'metric' },
            'm³': { name: '立方米', factor: 1, system: 'metric' },
            'cm³': { name: '立方厘米', factor: 0.000001, system: 'metric' },
            'in³': { name: '立方英寸', factor: 0.0000163871, system: 'imperial' },
            'ft³': { name: '立方英尺', factor: 0.0283168, system: 'imperial' },
            'gal': { name: '加侖', factor: 0.00378541, system: 'imperial' },
            'qt': { name: '夸脫', factor: 0.000946353, system: 'imperial' }
        }
    },
    time: {
        name: '時間',
        units: {
            'ms': { name: '毫秒', factor: 0.001, system: 'metric' },
            's': { name: '秒', factor: 1, system: 'metric' },
            'min': { name: '分鐘', factor: 60, system: 'metric' },
            'h': { name: '小時', factor: 3600, system: 'metric' },
            'd': { name: '天', factor: 86400, system: 'metric' },
            'wk': { name: '週', factor: 604800, system: 'metric' },
            'mo': { name: '月', factor: 2629746, system: 'metric' },
            'yr': { name: '年', factor: 31556952, system: 'metric' }
        }
    },
    pressure: {
        name: '壓力',
        units: {
            'Pa': { name: '帕斯卡', factor: 1, system: 'metric' },
            'kPa': { name: '千帕', factor: 1000, system: 'metric' },
            'MPa': { name: '兆帕', factor: 1000000, system: 'metric' },
            'bar': { name: '巴', factor: 100000, system: 'metric' },
            'atm': { name: '大氣壓', factor: 101325, system: 'metric' },
            'psi': { name: '磅/平方英寸', factor: 6894.76, system: 'imperial' },
            'mmHg': { name: '毫米汞柱', factor: 133.322, system: 'metric' },
            'inHg': { name: '英寸汞柱', factor: 3386.39, system: 'imperial' }
        }
    },
    temperature: {
        name: '溫度',
        units: {
            'C': { name: '攝氏度', factor: 1, offset: 0, system: 'metric' },
            'F': { name: '華氏度', factor: 5/9, offset: -32, system: 'imperial' },
            'K': { name: '開爾文', factor: 1, offset: -273.15, system: 'metric' },
            'R': { name: '蘭氏度', factor: 5/9, offset: -491.67, system: 'imperial' }
        }
    },
    force: {
        name: '力單位',
        units: {
            'N': { name: '牛頓', factor: 1, system: 'metric' },
            'kN': { name: '千牛頓', factor: 1000, system: 'metric' },
            'lbf': { name: '磅力', factor: 4.44822, system: 'imperial' },
            'kgf': { name: '公斤力', factor: 9.80665, system: 'metric' },
            'dyn': { name: '達因', factor: 0.00001, system: 'metric' },
            'ozf': { name: '盎司力', factor: 0.278014, system: 'imperial' }
        }
    },
    speed: {
        name: '速度',
        units: {
            'm/s': { name: '米/秒', factor: 1, system: 'metric' },
            'km/h': { name: '公里/小時', factor: 0.277778, system: 'metric' },
            'mph': { name: '英里/小時', factor: 0.44704, system: 'imperial' },
            'ft/s': { name: '英尺/秒', factor: 0.3048, system: 'imperial' },
            'knot': { name: '節', factor: 0.514444, system: 'metric' },
            'fps': { name: '幀/秒', factor: 1, system: 'metric' }
        }
    },
    angle: {
        name: '角度',
        units: {
            'deg': { name: '度', factor: 1, system: 'metric' },
            'rad': { name: '弧度', factor: 57.2958, system: 'metric' },
            'grad': { name: '梯度', factor: 0.9, system: 'metric' },
            'turn': { name: '轉', factor: 360, system: 'metric' },
            'arcmin': { name: '角分', factor: 1/60, system: 'metric' },
            'arcsec': { name: '角秒', factor: 1/3600, system: 'metric' }
        }
    }
};

// DOM 元素
const menuItems = document.querySelectorAll('.menu-item');
const unitsTable = document.getElementById('units-table');
const currentTypeTitle = document.getElementById('current-type-title');
const clearBtn = document.getElementById('clear-btn');

let currentType = 'length';
let unitInputs = {}; // 存儲所有單位輸入框的引用
let isUpdating = false; // 防止循環更新

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    createUnitsTable();
    setupEventListeners();
});

// 初始化選單
function initializeMenu() {
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active類
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            // 添加active類到當前選項
            this.classList.add('active');
            
            // 更新當前類型
            currentType = this.dataset.type;
            createUnitsTable();
            clearInputs();
        });
    });
}

// 創建單位表格
function createUnitsTable() {
    const units = unitData[currentType].units;
    unitsTable.innerHTML = '';
    unitInputs = {};
    
    // 更新標題
    currentTypeTitle.textContent = `${unitData[currentType].name}單位換算`;
    
    // 按系統排序：公制在前，英制在後
    const sortedUnits = Object.keys(units).sort((a, b) => {
        const systemA = units[a].system || 'metric';
        const systemB = units[b].system || 'metric';
        if (systemA === 'metric' && systemB === 'imperial') return -1;
        if (systemA === 'imperial' && systemB === 'metric') return 1;
        return 0;
    });
    
    // 創建單位輸入框
    sortedUnits.forEach(unit => {
        const unitRow = document.createElement('div');
        unitRow.className = `unit-row ${units[unit].system || 'metric'}`;
        
        const unitLabel = document.createElement('div');
        unitLabel.className = 'unit-label';
        unitLabel.textContent = units[unit].name;
        
        const unitSymbol = document.createElement('div');
        unitSymbol.className = 'unit-symbol';
        unitSymbol.textContent = unit;
        
        const unitInput = document.createElement('input');
        unitInput.type = 'number';
        unitInput.className = `unit-input ${units[unit].system || 'metric'}`;
        unitInput.placeholder = '0';
        unitInput.step = 'any';
        unitInput.dataset.unit = unit;
        
        // 存儲輸入框引用
        unitInputs[unit] = unitInput;
        
        // 添加事件監聽器
        unitInput.addEventListener('input', function() {
            if (!isUpdating) {
                updateAllUnits(unit, parseFloat(this.value) || 0);
            }
        });
        
        unitInput.addEventListener('focus', function() {
            this.select();
        });
        
        unitRow.appendChild(unitLabel);
        unitRow.appendChild(unitInput);
        unitRow.appendChild(unitSymbol);
        unitsTable.appendChild(unitRow);
    });
}

// 設置事件監聽器
function setupEventListeners() {
    clearBtn.addEventListener('click', clearInputs);
}

// 更新所有單位
function updateAllUnits(fromUnit, value) {
    if (isNaN(value) || value === 0) {
        // 如果輸入為0或空，清空所有其他輸入框
        Object.keys(unitInputs).forEach(unit => {
            if (unit !== fromUnit) {
                unitInputs[unit].value = '';
            }
        });
        return;
    }
    
    isUpdating = true;
    const units = unitData[currentType].units;
    
    // 計算所有其他單位的換算結果
    Object.keys(unitInputs).forEach(unit => {
        if (unit !== fromUnit) {
            let result;
            
            if (currentType === 'temperature') {
                result = convertTemperature(value, fromUnit, unit);
            } else {
                result = convertRegular(value, fromUnit, unit);
            }
            
            if (result !== null && !isNaN(result)) {
                unitInputs[unit].value = formatNumber(result);
            } else {
                unitInputs[unit].value = '';
            }
        }
    });
    
    isUpdating = false;
}

// 一般單位換算
function convertRegular(value, fromUnit, toUnit) {
    const units = unitData[currentType].units;
    const fromFactor = units[fromUnit].factor;
    const toFactor = units[toUnit].factor;
    
    // 先轉換為基本單位，再轉換為目標單位
    const baseValue = value * fromFactor;
    return baseValue / toFactor;
}

// 溫度換算
function convertTemperature(value, fromUnit, toUnit) {
    const units = unitData.temperature.units;
    
    // 先轉換為攝氏度
    let celsius;
    if (fromUnit === 'C') {
        celsius = value;
    } else if (fromUnit === 'F') {
        celsius = (value - 32) * 5/9;
    } else if (fromUnit === 'K') {
        celsius = value - 273.15;
    } else if (fromUnit === 'R') {
        celsius = (value - 491.67) * 5/9;
    }
    
    // 從攝氏度轉換為目標單位
    if (toUnit === 'C') {
        return celsius;
    } else if (toUnit === 'F') {
        return celsius * 9/5 + 32;
    } else if (toUnit === 'K') {
        return celsius + 273.15;
    } else if (toUnit === 'R') {
        return celsius * 9/5 + 491.67;
    }
    
    return null;
}

// 格式化數字
function formatNumber(num) {
    if (num === 0) return '0';
    
    // 科學記數法處理
    if (Math.abs(num) < 0.0001 || Math.abs(num) > 1000000) {
        return num.toExponential(6);
    }
    
    // 小數位數處理
    const decimalPlaces = Math.max(0, 6 - Math.floor(Math.log10(Math.abs(num))));
    return parseFloat(num.toFixed(decimalPlaces)).toString();
}

// 清除輸入
function clearInputs() {
    Object.keys(unitInputs).forEach(unit => {
        unitInputs[unit].value = '';
    });
    // 聚焦到第一個輸入框
    const firstInput = Object.values(unitInputs)[0];
    if (firstInput) {
        firstInput.focus();
    }
}

// 錯誤處理
window.addEventListener('error', function(e) {
    console.error('發生錯誤:', e.error);
    // 在控制台顯示錯誤，不影響用戶界面
});
