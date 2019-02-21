//
//  ViewController.m
//  TestWeb
//
//  Created by mc on 2018/8/14.
//  Copyright © 2018年 maiduoduo. All rights reserved.
//

#import "ViewController.h"
#import <WebKit/WebKit.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Do any additional setup after loading the view, typically from a nib.
    
    WKWebView *webView = [[WKWebView alloc]initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height)];
    [self.view addSubview:webView];
    
//    NSString *path = [[NSBundle mainBundle] pathForResource:@"index2" ofType:@"html"];
//    NSURL* url = [NSURL fileURLWithPath:path];
    
    NSString *path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
    NSURL* url = [NSURL fileURLWithPath:path];
    
    //创建URL
    NSURLRequest* request = [NSURLRequest requestWithURL:url];
    //创建NSURLRequest
    [webView loadRequest:request];//加载
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
