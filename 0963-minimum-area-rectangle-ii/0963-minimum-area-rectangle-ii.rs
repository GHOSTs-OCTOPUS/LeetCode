use std::collections::HashMap;
impl Solution {
    pub fn min_area_free_rect(points: Vec<Vec<i32>>) -> f64 {
        let points = points.iter().map(|p| vec![p[0] as i64, p[1] as i64]).collect::<Vec<_>>();
        let dist = |x1: i64, y1: i64, x2: i64, y2: i64| -> i64 {
            (x1-x2).pow(2) + (y1-y2).pow(2)
        };
        let mut centers = HashMap::new();
        for i in 0..points.len()-1 {
            let (x1, y1) = (points[i][0], points[i][1]);
            for j in 1..points.len() {
                let (x2, y2) = (points[j][0], points[j][1]);
                centers.entry((x1+x2, y1+y2)).or_insert(Vec::new()).push((x1, y1, x2, y2));;
            }
        }
        let mut min_area = f64::MAX;
        let mut area = i64::MAX;
        for (_, points) in centers.into_iter() {
            if points.len() < 2 {continue;}
            for i in 0..points.len()-1 {
                let (ax, ay, _, _) = points[i];
                for j in i+1..points.len() {
                    let (cx, cy, dx, dy) = points[j];
                    if (cy - ay) * (dy - ay) + (cx - ax) * (dx - ax) == 0 {
                        area = dist(ax, ay, cx, cy) * dist(ax, ay, dx, dy);
                        if area > 0 {
                            min_area = min_area.min(f64::sqrt(area as f64));
                        }
                    }
                }
            }
        }
        if min_area == f64::MAX {0.0} else {min_area}
    }
}