
export class SearchModel {
  constructor() {
    this.searchHistory = [];
    this.currentQuery = '';
  }

  // Lưu query vào history
  addToHistory(query) {
    if (query && query.trim() !== '') {
      // Tránh duplicate
      this.searchHistory = this.searchHistory.filter(item => item !== query.trim());
      this.searchHistory.unshift(query.trim());
      
      // Giới hạn 10 items
      if (this.searchHistory.length > 10) {
        this.searchHistory = this.searchHistory.slice(0, 10);
      }
      
   
      this.saveToStorage();
    }
  }


  setCurrentQuery(query) {
    this.currentQuery = query;
  }

  // Get current query
  getCurrentQuery() {
    return this.currentQuery;
  }

  // Get search history
  getHistory() {
    return this.searchHistory;
  }

  // Load từ localStorage
  loadFromStorage() {
    try {
      const stored = localStorage.getItem('searchHistory');
      if (stored) {
        this.searchHistory = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  }

  // Save vào localStorage
  saveToStorage() {
    try {
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  }
  clearHistory() {
    this.searchHistory = [];
    this.saveToStorage();
  }
}

// Singleton instance
export const searchModel = new SearchModel();
