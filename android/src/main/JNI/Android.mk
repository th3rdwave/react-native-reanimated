LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := reanimated

RE_COMMON_DIR := $(LOCAL_PATH)/../../../../Common/cpp

PROJECT_FILES := $(wildcard $(LOCAL_PATH)/../cpp/*.cpp)
PROJECT_FILES += $(wildcard $(RE_COMMON_DIR)/*.cpp)
PROJECT_FILES += $(wildcard $(RE_COMMON_DIR)/**/*.cpp)

LOCAL_SRC_FILES := $(PROJECT_FILES)

LOCAL_C_INCLUDES := $(LOCAL_PATH)
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/../..
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/hidden_headers
LOCAL_C_INCLUDES += $(LOCAL_PATH)/../cpp/headers
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers/NativeModules
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers/Registries
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers/SharedItems
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers/SpecTools
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers/Tools
LOCAL_C_INCLUDES += $(RE_COMMON_DIR)/headers/LayoutAnimations
LOCAL_C_INCLUDES += $(REACT_ANDROID_DIR)/../../hermes-engine/android/include

LOCAL_CFLAGS := \
  -DLOG_TAG=\"ReactNative\" \
  -DFOR_HERMES=true \
  -DONANDROID=true
LOCAL_CFLAGS += -fexceptions -frtti -std=c++17 -Wall

LOCAL_SHARED_LIBRARIES := libfb libfbjni libfolly_json libhermes libjsi libreactnativejni libturbomodulejsijni libreact_nativemodule_core

include $(BUILD_SHARED_LIBRARY)

include $(REACT_ANDROID_DIR)/Android-prebuilt.mk
include $(THIRD_PARTY_NDK_DIR)/hermes/Android.mk
