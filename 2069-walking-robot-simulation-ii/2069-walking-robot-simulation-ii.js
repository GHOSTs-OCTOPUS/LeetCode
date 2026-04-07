/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.width = width;
    this.height = height;
    this.perimeter = 2 * (width + height) - 4;

    this.x = 0;
    this.y = 0;
    this.dir = 0;

    this.dx = [1, 0, -1, 0];
    this.dy = [0, 1, 0, -1];
    this.dirs = ["East", "North", "West", "South"];
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    num %= this.perimeter;

    if (num === 0) {
        num = this.perimeter;
    }

    while (num > 0) {
        let nx = this.x + this.dx[this.dir];
        let ny = this.y + this.dy[this.dir];

        if (nx < 0 || nx >= this.width || ny < 0 || ny >= this.height) {
            this.dir = (this.dir + 1) % 4;
            continue;
        }

        this.x = nx;
        this.y = ny;
        num--;
    }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return [this.x, this.y];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return this.dirs[this.dir];
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */