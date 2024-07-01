<?php

$url = 'https://d1.dfh.icu';  // 你的 Worker 的 URL
$response = file_get_contents($url);
$data = json_decode($response, true);

$xx = $data['xx'];  // 从响应的 JSON 中获取 xx 的值

echo 'The value of xx is ' . $xx;
