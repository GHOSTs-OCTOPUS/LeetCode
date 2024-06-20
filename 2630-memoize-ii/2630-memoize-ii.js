class LookupTree {
  map = new Map();

  hasValue = false;

  value = null;

  getValueHelper(path, i) {
    const key = path[i];
    if (i >= path.length) {
      if (this.hasValue) {
        return { value: this.value, success: true };
      } else {
        return { value: undefined, success: false };
      }
    } else {
      if (this.map.has(key)) {
        return this.map.get(key).getValueHelper(path, i + 1);
      } else {
        return { value: undefined, success: false };
      }
    }
  }

  getValue(path) {
    return this.getValueHelper(path, 0);
  }

  setValueHelper(path, i, value) {
    const key = path[i];
    if (i >= path.length) {
      this.value = value;
      this.hasValue = true;
    } else {
      if (!this.map.has(key)) {
        this.map.set(key, new LookupTree());
      }
      return this.map.get(key).setValueHelper(path, i + 1, value);
    }
  }

  setValue(path, value) {
    return this.setValueHelper(path, 0, value);
  }
}

function memoize(func) {
  const tree = new LookupTree();
  const newFunction = (...params) => {
    const cache = tree.getValue(params);
    if (cache.success) {
      return cache.value;
    }
    const result = func(...params);
    tree.setValue(params, result);
    return result;
  };
  return newFunction;
}