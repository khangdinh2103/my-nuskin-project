// Controller - Search logic và event handling
import { searchModel } from '../models/Search';

export class SearchController {
  constructor() {
    this.model = searchModel;
    this.observers = []; // Observer pattern để notify views
    
    // Load data từ storage khi khởi tạo
    this.model.loadFromStorage();
  }

  // Subscribe để listen cho data changes
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Unsubscribe
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notify tất cả observers
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }

  // Handle search input
  handleSearch(query, navigate) {
    if (query && query.trim() !== '') {
      const trimmedQuery = query.trim();
      
      // Update model
      this.model.setCurrentQuery(trimmedQuery);
      this.model.addToHistory(trimmedQuery);
      
      // Notify observers
      this.notify({
        type: 'SEARCH_UPDATED',
        query: trimmedQuery,
        history: this.model.getHistory()
      });
      
      // Navigate to detail page với search query
      if (navigate) {
        navigate(`/search/${encodeURIComponent(trimmedQuery)}`);
      }
      
      return trimmedQuery;
    }
    return null;
  }

  // Handle input change
  handleInputChange(query) {
    this.model.setCurrentQuery(query);
    
    // Notify observers về input change
    this.notify({
      type: 'INPUT_CHANGED',
      query: query,
      suggestions: this.getSuggestions(query)
    });
  }

  // Get suggestions based on input
  getSuggestions(query) {
    if (!query || query.trim() === '') {
      return [];
    }
    
    const trimmedQuery = query.trim().toLowerCase();
    return this.model.getHistory()
      .filter(item => item.toLowerCase().includes(trimmedQuery))
      .slice(0, 5); // Limit to 5 suggestions
  }

  // Get current search data
  getCurrentData() {
    return {
      query: this.model.getCurrentQuery(),
      history: this.model.getHistory()
    };
  }

  // Clear search history
  clearHistory() {
    this.model.clearHistory();
    this.notify({
      type: 'HISTORY_CLEARED',
      history: []
    });
  }

  // Handle suggestion click
  handleSuggestionClick(suggestion, navigate) {
    return this.handleSearch(suggestion, navigate);
  }
}

// Singleton instance
export const searchController = new SearchController();
