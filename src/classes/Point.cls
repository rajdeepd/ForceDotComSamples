public class Point {
    Integer x = 1, y = 1;
    void move(Integer dx, Integer dy) {
        x += dx;
        y += dy;
        alert();
    }
    void alert(){
        System.debug('x:' + x + ', ' + 'y: ' + y);
    }
}