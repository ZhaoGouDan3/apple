#include "ApplyOcApi.h"
#import <Foundation/Foundation.h>
#import <AppsFlyerLib/AppsFlyerLib.h>
#import "AppController.h"
#import <AudioToolbox/AudioToolbox.h>
#import "CommonCrypto/CommonDigest.h"


@implementation ApplyOcApi


+ (NSString *)getAppsFid {
    return [[AppsFlyerLib shared] getAppsFlyerUID];
}


+ (NSString *)getIMEIid {
    NSString* pkgName = @"ccom.za99.salpe.xnmpa.sap";
    NSString* imei = nil;
    NSMutableDictionary *kc_dic = [NSMutableDictionary dictionaryWithObjectsAndKeys: (id)kSecClassGenericPassword,(id)kSecClass, pkgName, (id)kSecAttrService, pkgName, (id)kSecAttrAccount,(id)kSecAttrAccessibleAfterFirstUnlock,(id)kSecAttrAccessible, nil];
    [kc_dic setObject:(id)kCFBooleanTrue forKey:(id)kSecReturnData];
    [kc_dic setObject:(id)kSecMatchLimitOne forKey:(id)kSecMatchLimit];
    CFDataRef dataKey = NULL;
    OSStatus ss =  SecItemCopyMatching((CFDictionaryRef)kc_dic, (CFTypeRef *)&dataKey);
    if (ss == noErr) {
        @try {
            imei = [NSKeyedUnarchiver unarchiveObjectWithData:(__bridge NSData *)dataKey];
        } @catch (NSException *e) {
            imei = @"";
        }
    }
    else if (ss != errSecItemNotFound) {
        imei = @"";
    }
    if (dataKey){
        CFRelease(dataKey);
    }

    if (imei == nil || imei.length == 0) {
        CFUUIDRef uuidref = CFUUIDCreate(nil);
        CFStringRef uuidrefStr = CFUUIDCreateString(nil, uuidref);
        NSString* uuidStr = (NSString *)CFBridgingRelease(CFStringCreateCopy( NULL, uuidrefStr));
        CFRelease(uuidref);
        CFRelease(uuidrefStr);
        
        const char *uuidStr_str = [uuidStr UTF8String];
        unsigned char md5[CC_MD5_DIGEST_LENGTH];
        CC_MD5(uuidStr_str, (CC_LONG)strlen(uuidStr_str), md5);
        NSMutableString *mutable_str = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
        for(int i = 0; i < CC_MD5_DIGEST_LENGTH; i++) {
            [mutable_str appendFormat:@"%02x", md5[i]];
        }
        imei = mutable_str;
        
        NSMutableDictionary *kc_dic2 = [NSMutableDictionary dictionaryWithObjectsAndKeys:(id)kSecClassGenericPassword,(id)kSecClass,pkgName, (id)kSecAttrService,pkgName, (id)kSecAttrAccount,(id)kSecAttrAccessibleAfterFirstUnlock,(id)kSecAttrAccessible,nil];
        SecItemDelete((CFDictionaryRef)kc_dic2);
        [kc_dic2 setObject:[NSKeyedArchiver archivedDataWithRootObject:imei] forKey:(id)kSecValueData];
        SecItemAdd((CFDictionaryRef)kc_dic2, NULL);
    }
    return imei;
}

+ (NSString*)applyafsource {
    NSString* source = [(AppController*)[[UIApplication sharedApplication] delegate] getAfStatus];
    if (source == nil) {
        source = @"";
    }
    return source;
}


+ (void)zhengdongjiekou {
    AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
}



@end